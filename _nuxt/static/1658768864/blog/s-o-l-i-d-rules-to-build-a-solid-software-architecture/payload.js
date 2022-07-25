__NUXT_JSONP__("/blog/s-o-l-i-d-rules-to-build-a-solid-software-architecture", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{article:{slug:"s-o-l-i-d-rules-to-build-a-solid-software-architecture",description:"S.O.L.I.D. principles and their consequences are analyzed in depth.",title:"\u003Cspan\u003E\u003Cstrong\u003ES.O.L.I.D.\u003C\u002Fstrong\u003E rules to build a \u003Cstrong\u003Esolid\u003C\u002Fstrong\u003E software architecture\u003C\u002Fspan\u003E",author:"Gioele Crispo",img:w,alt:"solid rules",tags:["architectures"],createdAt:"2020-11-11T12:15:20.516Z",updatedAt:"2021-04-09T12:15:20.516Z",toc:[{id:x,depth:p,text:r},{id:y,depth:p,text:"What is a \"Software Architecture\"?"},{id:z,depth:p,text:s},{id:A,depth:p,text:t},{id:B,depth:p,text:u},{id:C,depth:p,text:v}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"solid-principles-to-build-a-solid-software-architecture"},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#solid-principles-to-build-a-solid-software-architecture",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:"S.O.L.I.D. principles to build a solid software architecture"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:D},{type:b,tag:i,props:{},children:[{type:a,value:E}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:x},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#introduction",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This article is highly inspired by the work of Robert C. Martin, popularly known as Uncle Bob, in its book \""},{type:b,tag:i,props:{},children:[{type:a,value:"Clean Architecture"}]},{type:a,value:"\".\nS.O.L.I.D., in fact, is an acronym for the first five object-oriented design principles defined by Uncle Bob,\ntogether with the principles of component cohesion e component coupling.\nThese principles are fundamental for building high quality software architectures."}]},{type:a,value:c},{type:b,tag:e,props:{style:G},children:[{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:"But why do we have to design good software architectures and not package software that just works?"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"It sounds like a rhetorical question, but there is much more to it. A well-designed architecture means making the system resilient to changes and benefit a lot in terms of costs.\nIt might appear that this problem only affects long-running projects, but it doesn't - customers are constantly asking for software changes based on marketing choices or what they have seen so far.\nAgile methods were born to have software development processes that are less rigid, faster and better absorb the changes required by the customer, but they cannot absorb the costs in terms of development time if the architecture behind them is not of good quality.\nBefore going into the details of the basic principles for the design of a good architecture we need to\ndefine it and understand the disadvantages of not having one."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:y},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#what-is-a-software-architecture",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:D},{type:b,tag:i,props:{},children:[{type:a,value:E}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"In his book, Robert C. Martin defines software architecture like this:"}]},{type:a,value:c},{type:b,tag:e,props:{style:G},children:[{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:"The architecture of a software system is the \"form\" given to that system by those who build it. \n   By \"form\" we mean the division of this system into components, in the arrangement of them and \n   in the ways in which these components communicate with each other. \n   The purpose is to facilitate the development, distribution, operation and maintenance of the \n   software system contained therein."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Among the various definitions, in my opinion, Uncle Bob's is the most effective.\nIt clearly defines the ultimate goal of a software architecture: "},{type:b,tag:f,props:{},children:[{type:a,value:"to support the life cycle of\nthe system, minimizing the costs of its implementation and maximizing the programmer's productivity."}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Not having a good architecture implies that the system produced will be of poor quality:"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"will have "},{type:b,tag:f,props:{},children:[{type:a,value:"poor maintainability"}]},{type:a,value:": a trivial change can impact many files and lines of code with the possibility\nof multiplying bugs;"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"it will be "},{type:b,tag:f,props:{},children:[{type:a,value:"difficult to understand"}]},{type:a,value:": the understanding of the software suffers considerably; those who join the\nteam after the project or the developer himself after months makes a lot of effort to understand the code."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"will enjoy "},{type:b,tag:f,props:{},children:[{type:a,value:"poor reusability"}]},{type:a,value:": it means having large blocks of code and duplicated functionality in the project."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"will be "},{type:b,tag:f,props:{},children:[{type:a,value:"hardly testable"}]},{type:a,value:": having large components, not logically separate and inter-dependent on each other,\nmakes it very difficult to produce good test suites."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:z},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#solid-principles",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Following there are the principles:"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Single-responsibility Principle (SRP)"}]},{type:a,value:":\nA class or a module should have one and only one reason to change, meaning that a class should have only one job."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This principle indicates that everything that the same reason or actor to change must be cohesive, put together,\nand separated from the pieces of code that can change for different reasons or actors."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Open-closed Principle (OCP)"}]},{type:a,value:":\nObjects or entities should be open for extension, but closed for modification."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To ensure good maintainability the system should be open to extensions rather than modifications.\nThis is important to maintain consistency with the other parts that the part of the software\ninterfaces with. Allowing extensions means taking advantage of inheritance at the class level\nand building extensible components at the architecture level."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Liskov Substitution Principle (LSP)"}]},{type:a,value:" :\nLet q(x) be a property provable about objects of x of type T.\nThen q(y) should be provable for objects y of type S where S is a subtype of T."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Liskov's principle tells us how to control inheritance. But it can be transported to the architectural level by\nindicating how components must communicate with each other, through a strong definition of interfaces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Interface Segregation Principle (ISP)"}]},{type:a,value:":\nA client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This principle simply tells us to make classes and modules simple, avoiding unnecessary dependencies\nand therefore difficult to maintain in the long term."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Dependency Inversion Principle (DIP)"}]},{type:a,value:":\nEntities must depend on abstractions not on concretions.\nIt states that the high level module must not depend on the low level module, but they should depend on abstractions."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This principle tells us that dependencies should all refer to abstract components and not to concrete\ncomponents. The use of concrete classes is advisable only when they are extremely "},{type:b,tag:f,props:{},children:[{type:a,value:"stable"}]},{type:a,value:",\nthat is, little prone to changes. Think of the "},{type:b,tag:i,props:{},children:[{type:a,value:"String"}]},{type:a,value:" class: you are sure that it will never or almost never\nchange and you can use it with confidence."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:A},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#component-cohesion-principles",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"First of all, we need to establish the definition of component that we are going to use.\nA component is a unit of composition with a given context and that can be deployed independently\nsuch as .jar or a npm module."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Reuse\u002FRelease equivalence Principle (REP)"}]},{type:a,value:":\nThe granularity of reuse is the granularity of release."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Basically, it means that a component should be released as highly cohesive code units, so the elements of it would be releasable together.\nClasses and modules that have been bundled together in a component should be releasable together. The fact that they share the same version number and release code and are included in the same release documentation must be logically acceptable to the author of the component and should make sense to the user.\nA user could decide whether to use the component or its new dressing based on the documentation that is provided."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Common Closure Principle (CCP)"}]},{type:a,value:"\nWe keep together in a component all the classes that are modified for the same reason and at the same time."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"It is a component version of the Single Responsibility Principle. While the latter states that a "},{type:b,tag:i,props:{},children:[{type:a,value:"class"}]},{type:a,value:" should have only one\nsingle reason to be modified, CCP tell us a "},{type:b,tag:i,props:{},children:[{type:a,value:"component"}]},{type:a,value:" should not have more than one reason to change.\nThat way, we increase the maintainability of our software by having to alter just a component when the requirement specific to it changes.\nFurthermore, this principle is strongly related to the OCP principle: they refer to the same \"closure\" meaning. The classes\nshould be closed to changes but open to the extensions. Since a perfect closure (the immutability of the code) is impossible,\nwe have to reduce the changes by adopting the strategy to put all together the classes which are correlated each one."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"We can summarize the CCP and SRP principles in the following statement:\n"},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\"Gather together those things that change simultaneously and for the same reasons.\""}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Common Reuse Principle (CRP)"}]},{type:a,value:":\nWe shouldn’t force our users to depend on things that they are not going to use."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"It helps us to choose which classes and module we have to put together into a component.\nThis principle tell us also what not to do. this principle also tells us what not to do.\nIf the user component uses only one component class and not the others, you will still need to import and depend on the whole component.\nThis becomes a problem, because the user component may undergo changes (and will have to be recompiled, rebuilt and redistributed anyway)\neven if the changes affect classes that the user component does not use. We must therefore always analyze the dependencies and make sure\nthat the modules to be included in a component are really inseparable.\nThe CRP principle is the generic version of the ISP principle, which urges us not to depend on classes containing methods we don't use."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"We can summarize the CPR and ISP principles in the following statement:\n"},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\"Don't depend on the things you don't need.\""}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:B},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#component-coupling-principles",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once we know how create components, we have also to put the attention on how the interact each other.\nThe next principles regards the components relationship."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Acyclic Dependencies Principle (ADP)"}]},{type:a,value:":\nDo not allow loops to arise in the dependency graph between components."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"According to this principle, we must divide the components according to their relationships\navoiding that one component depends on another that depends directly or indirectly on the first.\nFurthermore, the components should be independently developed and released.\nThis implies that a component dependent on a certain other component or module is not forced to modify\nits code based on the changes of that module on which it depends and can use the previous version\nuntil it is not ready to change."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Stable Dependencies Principle (SDP)"}]},{type:a,value:":\nBet on stability."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The stability of a component is measured based on its inbound and outbound dependencies.\nIf a component depends on many other components (incoming dependencies) it has many reasons to\nchange and be modified according to the changes imposed by the components it depends on.\nIf a component is a dependency of many other components (outbound dependencies) it has many\nreasons to "},{type:b,tag:f,props:{},children:[{type:a,value:"NOT"}]},{type:a,value:" change and be modified in order not to impact the components that depend on it.\nSo a component is stable if it has many dependencies on exit and few on input."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Stable Abstraction Principle (SAP)"}]},{type:a,value:":\nA component should be as abstract as it is stable."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"In the stable components we must therefore insert what must change little, that is, the \"political\"\ndecisions to orient the system, which must not be "},{type:b,tag:f,props:{},children:[{type:a,value:"volatile"}]},{type:a,value:", however they must be "},{type:b,tag:f,props:{},children:[{type:a,value:"flexible"}]},{type:a,value:".\nThe best way is to use abstract classes, because they\nguarantee us an easy modifiability through extension (OCP principle)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:C},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#conclusions",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Having these principles in mind is certainly an extra weapon to produce quality software,\nmaximizing the time and effort of those who work on it. Basically, the principles all aim to isolate\nsoftware, avoiding creating unnecessary and harmful dependencies for system maintenance. The "},{type:b,tag:i,props:{},children:[{type:a,value:"software"}]},{type:a,value:"\nis by definition changeable; therefore it is necessary to be as lean and flexible as possible.\nHowever, too much generalization can also be harmful if it is not used correctly or is not necessary\nin relation to the domain of the system: it is a waste of resources and time. It is important to know\nhow to mix these two aspects of software development correctly: using these principles wisely requires\npractice and knowledge."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fs-o-l-i-d-rules-to-build-a-solid-software-architecture",extension:".md"}}],fetch:{},mutations:[["AppState\u002FsetAppToolbarImage",w]]}}("text","element","\n","br","p","strong","li","ul","em","a","true",-1,"span","icon","icon-link",2,"h2","Introduction","S.O.L.I.D. principles","Component cohesion principles","Component coupling principles","Conclusions","\u002Fblog\u002Fs-o-l-i-d-rules-to-build-a-solid-software-architecture\u002F_index.png","introduction","what-is-a-software-architecture","solid-principles","component-cohesion-principles","component-coupling-principles","conclusions","What is a \"","Software Architecture","\"?","margin-left:25px; border-left: 4px solid #666; padding-left:15px","i")));