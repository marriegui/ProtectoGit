const __setHeaders=e=>{if(!e.hasOwnProperty("headers")&&e.headers.length<1)return!1;const t=e.headers;let r={};return Object.keys(t).forEach(e=>{e.endsWith("--ignore")?r[e]="":r[e]=t[e]}),r},__templateStructure=e=>({values:Object.keys(e).filter(e=>{if(!["volanta","filttro-provincia","filtro-provincia","color","gna","gid","fna","nam","in1","sag","region","region_id","stroke-opacity","stroke-width","stroke-color","stroke"].includes(e))return e}),title_classlist:["h2"],term_classlist:["h3","class=h5"],lead:{key:"volanta",style:"text-transform:uppercase;border-bottom: 1px solid var(--gray-border, #ccc);padding-bottom:.25em; color:var(--default) font-size:small;"}});class ponchoMapProvincesCustom extends PonchoMapProvinces{constructor(e,t,r){var a=Object.assign({},__templateStructure(r.headers),r?.template_structure),a=(r.headers=__setHeaders(r),{id_mixing:["in1","nam"],scope:"poncho-map",title:"filttro-provincia",template_markdown:!0,allowed_tags:["*"],template_structure:r.template_structure=a,tooltip:!0,hash:!0,province_index:"filttro-provincia",fit_bounds_onevent:!0,theme_ui:"default",theme_map:"transparent",hide_select:!0,overlay_image:!0,overlay_image_opacity:.75,fit_bounds:!0});super(e,t,Object.assign({},a,r))}}