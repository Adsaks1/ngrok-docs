"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[99207],{41822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(51163),a=(n(59496),n(49613));const l={},o="User Agent Filter",i={unversionedId:"cloud-edge/modules/user-agent-filter",id:"cloud-edge/modules/user-agent-filter",title:"User Agent Filter",description:"---",source:"@site/docs/cloud-edge/modules/user-agent-filter.md",sourceDirName:"cloud-edge/modules",slug:"/cloud-edge/modules/user-agent-filter",permalink:"/docs/cloud-edge/modules/user-agent-filter",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/cloud-edge/modules/user-agent-filter.md",tags:[],version:"current",lastUpdatedBy:"Mohamed Osman Ahmed",lastUpdatedAt:1694018190,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{},sidebar:"docs",previous:{title:"TLS Termination",permalink:"/docs/cloud-edge/modules/tls-termination"},next:{title:"Webhook Verification",permalink:"/docs/cloud-edge/modules/webhook-verification"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Agent CLI",id:"agent-cli",level:3},{value:"SSH",id:"ssh",level:3},{value:"Agent Configuration File",id:"agent-configuration-file",level:3},{value:"Go SDK",id:"go-sdk",level:3},{value:"Rust SDK",id:"rust-sdk",level:3},{value:"Kubernetes Ingress Controller",id:"kubernetes-ingress-controller",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Reference",id:"reference",level:2},{value:"Configuration",id:"configuration",level:3},{value:"<strong>Agent Configuration</strong>",id:"agent-configuration",level:6},{value:"Upstream Headers",id:"upstream-headers",level:3},{value:"Errors",id:"errors",level:3},{value:"Limits",id:"limits",level:3},{value:"Try it out",id:"try-it-out",level:2}],s={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-agent-filter"},"User Agent Filter"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("h3",{id:"agent-cli"},"Agent CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ngrok http 80 --ua-filter-allow="(foo/(\\d)+.(\\d)+)","(bar/(\\d)+.(\\d)+)" --ua-filter-deny="(buz/(\\d)+.(\\d)+)"\n')),(0,a.kt)("h3",{id:"ssh"},"SSH"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"agent-configuration-file"},"Agent Configuration File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'tunnels:\n  example:\n    proto: https\n    addr: 80\n    ua_filter_allow: ["(foo/(d)+.(d)+)", "(bar/(d)+.(d)+)"]\n    ua_filter_deny: ["(buzz/(d)+.(d)+)"]\n')),(0,a.kt)("h3",{id:"go-sdk"},"Go SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "net"\n\n    "golang.ngrok.com/ngrok"\n    "golang.ngrok.com/ngrok/config"\n)\n\nfunc listenUserAgentFIlter(ctx context.Context) net.Listener {\n    listener, _ := ngrok.Listen(ctx,\n        config.HTTPEndpoint(\n            config.WithUserAgentFilter( []string{"(foo)/(d)+.(d)+"}, []string{"bar/(d)+.(d)+"}),\n        ),\n        ngrok.WithAuthtokenFromEnv(),\n    )\n    return listener\n}\n')),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"rust-sdk"},"Rust SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"")),(0,a.kt)("p",null,"TODO:"),(0,a.kt)("h3",{id:"kubernetes-ingress-controller"},"Kubernetes Ingress Controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"")),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("h6",{id:"agent-configuration"},(0,a.kt)("strong",{parentName:"h6"},"Agent Configuration")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"User Agent Filter Allow")),(0,a.kt)("td",{parentName:"tr",align:null},"A set of regular expressions used to match allow User-Agents.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"User Agent Filter Deny")),(0,a.kt)("td",{parentName:"tr",align:null},"A set of regular expressions used to match deny User-Agents.")))),(0,a.kt)("h3",{id:"upstream-headers"},"Upstream Headers"),(0,a.kt)("p",null,"This module does not add any upstream headers."),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Error"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/errors/err_ngrok_3211/"},"ERR_NGROK_3211")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"403")),(0,a.kt)("td",{parentName:"tr",align:null},"The server does not authorize requests from your user-agent")))),(0,a.kt)("h3",{id:"limits"},"Limits"),(0,a.kt)("p",null,"TODO:"),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"Run ngrok with User Agent Filter's allow and deny set to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ngrok http 80 \\\n  --domain your-domain.ngrok.app \\\n  --ua-filter-allow="(GoingMerry/(\\d)+.(\\d)+)","(GomuGomu/(\\d)+.(\\d)+)" \\\n  --ua-filter-deny="(Xebec/(\\d)+.(\\d)+)"\n')),(0,a.kt)("p",null,"Then make requests to your ngrok domain with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'GoingMerry/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v\ncurl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'GomuGomu/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v\ncurl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'Xebec/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v\ncurl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A '' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v\ncurl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'TwitterBot/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v\n")))}p.isMDXComponent=!0}}]);