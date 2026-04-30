import { useEffect, useState } from "react";

let cachedDoc = null;
let inflight = null;

async function loadDoc() {
  if (cachedDoc) return cachedDoc;
  if (inflight) return inflight;
  inflight = fetch(`${import.meta.env.BASE_URL}reference.html`)
    .then(r => {
      if (!r.ok) throw new Error(`reference.html ${r.status}`);
      return r.text();
    })
    .then(html => {
      cachedDoc = new DOMParser().parseFromString(html, "text/html");
      return cachedDoc;
    })
    .finally(() => { inflight = null; });
  return inflight;
}

export function useConstellationReference(id, lang, enabled) {
  const [state, setState] = useState({ html: "", loading: false, error: null });

  useEffect(() => {
    if (!enabled || !id) return;
    let active = true;
    setState(s => ({ ...s, loading: true, error: null }));
    loadDoc()
      .then(doc => {
        if (!active) return;
        const section = doc.querySelector(`section[data-id="${CSS.escape(id)}"]`);
        const node = section?.querySelector(`[lang="${lang}"]`) ?? section;
        setState({ html: node?.innerHTML ?? "", loading: false, error: null });
      })
      .catch(err => {
        if (!active) return;
        setState({ html: "", loading: false, error: err.message });
      });
    return () => { active = false; };
  }, [id, lang, enabled]);

  return state;
}
