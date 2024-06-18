const message:string='Hello TypeScript!';  
const title:HTMLElement | null=document.querySelector('#hello');
title!.textContent=message;