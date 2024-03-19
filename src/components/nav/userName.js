const divUserName = document.querySelector('.user-name')
const userNameHtml =( name )=>{
   const html = `<span>${name}</span>`;
   divUserName.innerHTML = html;
}

export const showUserName = () =>{
    const {User_Name} = JSON.parse( sessionStorage.getItem('user'));
    userNameHtml( User_Name );
}