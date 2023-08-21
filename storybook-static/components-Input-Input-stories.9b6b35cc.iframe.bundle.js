/*! For license information please see components-Input-Input-stories.9b6b35cc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmodified_project=self.webpackChunkmodified_project||[]).push([[195],{"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=_ref=>{let{placeholder="Text",size="small",onChange}=_ref;const styles={padding:"large"==size?"10px":"5px"};return(0,jsx_runtime.jsx)("input",{type:"text",placeholder,style:styles,onChange})};Input.displayName="Input";const Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{placeholder:{defaultValue:{value:"Text"},description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}const Input_stories={component:Input_Input,title:"InputStory",argTypes:{},tags:["autodocs"]},Large=args=>(0,jsx_runtime.jsx)(Input_Input,{"data-testId":"input-id",...args});Large.displayName="Large",Large.args={size:"large",placeholder:"Large"};const Small=args=>(0,jsx_runtime.jsx)(Input_Input,{"data-testId":"input-id",...args});Small.displayName="Small",Small.args={size:"small",placeholder:"Small"},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'args => <Input data-testId="input-id" {...args} />',...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'args => <Input data-testId="input-id" {...args} />',...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Large","Small"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);