(()=>{"use strict";const t=document.getElementById("content"),s=new class{constructor(t,s,n,e){this.title=t,this.description=s,this.dueDate=n,this.priority=e}}("Plan of project","Brainstorm and design","02/12/20","high"),n=new class{constructor(t){this.name=t,this.todos=[]}}("Main project");n.todos.push(s),t.innerHTML=n.name})();