(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(24);var r=n(0),o=n.n(r),a=n(20),c=n.n(a),l=n(17),s=n(4),u=n(5),p=n(7),i=n(6),m=n(8),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Welcome to PetFul"),o.a.createElement("p",null,"The One stop shop to adopt a new friend!"))}}]),t}(r.Component),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Would you like a new friend?"),o.a.createElement("p",null,"Here at Petful We have arranged a quque of lovely cats and dogs that need a new home! The way this site works, if you decide to adopt a pet you will join the line and when you reach the front, you will be given an option of a cat or a dog!"),o.a.createElement("button",{onClick:function(){return e.props.addPerson().then((function(){e.props.history.push("/adopt")})).then((function(){e.props.handleRemove()}))},type:"button"},"Lets get Started!"))}}]),t}(r.Component),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Well done! You truly are a a good person!"),o.a.createElement("h3",null,"Meet your new friend!"),o.a.createElement("img",{src:"".concat(this.props.pet.imageURL)}),o.a.createElement("h4",null,"Name: "+this.props.pet.name),o.a.createElement("p",null,"Age: "+this.props.pet.age),o.a.createElement("p",null,"Breed: "+this.props.pet.breed),o.a.createElement("p",null,"Gender: "+this.props.pet.gender),o.a.createElement("p",null,"Story: "+this.props.pet.story))}}]),t}(r.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={currentPet:"",hasPet:!1,congrats:!1},n.storeCat=function(){n.setState({currentPet:n.props.cat,hasPet:!0})},n.storeDog=function(){n.setState({currentPet:n.props.dog,hasPet:!0})},n.thisDog=function(){return n.props.dog.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"there are no more Dogs to adopt, good job!")):"(You)"===n.props.currentPeople[0]?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"".concat(n.props.dog.imageURL)}),o.a.createElement("h4",null,"Name: "+n.props.dog.name),o.a.createElement("p",null,"Age: "+n.props.dog.age),o.a.createElement("p",null,"Breed: "+n.props.dog.breed),o.a.createElement("p",null,"Gender: "+n.props.dog.gender),o.a.createElement("p",null,"Story: "+n.props.dog.story),o.a.createElement("button",{onClick:function(){return n.storeDog()}},"Adopt Me!")):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"".concat(n.props.dog.imageURL)}),o.a.createElement("h4",null,"Name: "+n.props.dog.name),o.a.createElement("p",null,"Age: "+n.props.dog.age),o.a.createElement("p",null,"Breed: "+n.props.dog.breed),o.a.createElement("p",null,"Gender: "+n.props.dog.gender),o.a.createElement("p",null,"Story: "+n.props.dog.story))},n.thisCat=function(){return n.props.cat.length?o.a.createElement("h2",null,"there are no more Cats to adopt, good job!"):"(You)"===n.props.currentPeople[0]?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"".concat(n.props.cat.imageURL)}),o.a.createElement("h4",null,"Name: "+n.props.cat.name),o.a.createElement("p",null,"Age: "+n.props.cat.age),o.a.createElement("p",null,"Breed: "+n.props.cat.breed),o.a.createElement("p",null,"Gender: "+n.props.cat.gender),o.a.createElement("p",null,"Story: "+n.props.cat.story),o.a.createElement("button",{onClick:function(){return n.storeCat()}},"Adopt Me!")):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"".concat(n.props.cat.imageURL)}),o.a.createElement("h4",null,"Name: "+n.props.cat.name),o.a.createElement("p",null,"Age: "+n.props.cat.age),o.a.createElement("p",null,"Breed: "+n.props.cat.breed),o.a.createElement("p",null,"Gender: "+n.props.cat.gender),o.a.createElement("p",null,"Story: "+n.props.cat.story))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getPets()}},{key:"render",value:function(){return!1===this.state.hasPet?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"Meet your new friend!")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"showPets"},o.a.createElement("h3",null,"Cat"),this.thisCat()),o.a.createElement("div",{className:"showPets"},o.a.createElement("h3",null,"Dog"),this.thisDog()))):(!1===this.state.congrats&&(this.props.deletePerson(),this.setState({congrats:!0})),o.a.createElement(f,{pet:this.state.currentPet}))}}]),t}(r.Component),E="https://petful-server-mm.herokuapp.com",P=n(10),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={people:[],cat:"",dog:""},n.getPeople=function(){return fetch("".concat(E,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){n.setState({people:e})})).catch((function(e){console.error({error:e})}))},n.listPeople=function(){for(var e="",t=0;t<n.state.people.length;t++)e+="".concat(n.state.people[t],", ");return o.a.createElement(o.a.Fragment,null,e)},n.addPerson=function(){return fetch("".concat(E,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:"(You)"})}).then((function(){return n.getPeople()}))},n.addPersons=function(e){return fetch("".concat(E,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}).then((function(){return n.getPeople()}))},n.removePerson=function(){return fetch("".concat(E,"/people"),{method:"DELETE"}).then((function(){return n.getPeople()})).then((function(){return n.handleAdds()}))},n.handleAdds=function(){var e=["Todd","Schmodd","Dod","Slodd"];"(You)"===n.state.people[0]&&(setTimeout((function(){n.addPersons(e[0])}),2e3),setTimeout((function(){n.addPersons(e[1])}),4e3),setTimeout((function(){n.addPersons(e[2])}),6e3),setTimeout((function(){n.addPersons(e[3])}),8e3))},n.handleRemove=function(){"(You)"!==n.state.people[0]&&(n.handleRemovePets(),setTimeout((function(){n.removePerson()}),2e3),setTimeout((function(){n.removePerson()}),4e3),setTimeout((function(){n.removePerson()}),6e3),setTimeout((function(){n.removePerson()}),8e3))},n.removePets=function(e){fetch("".concat(E,"/pets/").concat(e),{method:"DELETE"}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(){return n.getPets()}))},n.getPets=function(){Promise.all([fetch("".concat(E,"/pets/cat")),fetch("".concat(E,"/pets/dog"))]).then((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return n.ok?r.ok?Promise.all([n.json(),r.json()]):r.json().then((function(e){return Promise.reject(e)})):n.json().then((function(e){return Promise.reject(e)}))})).then((function(e){var t=Object(l.a)(e,2),r=t[0],o=t[1];n.setState({cat:r,dog:o})})).catch((function(e){console.error({error:e})}))},n.handleRemovePets=function(){"(You)"!==n.state.people[0]&&(setTimeout((function(){Math.random()>.5?n.removePets("cat"):n.removePets("dog")}),2e3),setTimeout((function(){Math.random()>.5?n.removePets("cat"):n.removePets("dog")}),4e3),setTimeout((function(){Math.random()>.5?n.removePets("cat"):n.removePets("dog")}),6e3),setTimeout((function(){Math.random()>.5?n.removePets("cat"):n.removePets("dog")}),8e3))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("".concat(E,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({people:t})})).catch((function(e){console.error({error:e})}))}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(P.c,null,o.a.createElement(P.a,{path:"/",render:function(t){return o.a.createElement(h,Object.assign({},t,{addPerson:e.addPerson,handleRemove:e.handleRemove}))},exact:!0}),o.a.createElement(P.a,{path:"/adopt",render:function(t){return o.a.createElement(g,Object.assign({},t,{deletePerson:e.removePerson,getPets:e.getPets,dog:e.state.dog,cat:e.state.cat,currentPeople:e.state.people,removePet:e.removePets}))},exact:!0})),o.a.createElement("footer",null,o.a.createElement("p",null,"Current People in Line: ",this.listPeople())))}}]),t}(r.Component),j=n(13);c.a.render(o.a.createElement(j.a,null,o.a.createElement(v,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0243a3b6.chunk.js.map