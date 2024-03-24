const tbody = document.querySelector('tbody');
const htmlUsersBitacora =()=>{
    const html = `<tr>
    <td class='alinear'>${value.User_Name}</td>
    <td class='alinear'>${value.CD_NIP}</td>
    <td class='alinear'>${value.CD_ReferenceNum}</td>
    <td class='alinear'>${value.CD_ReferenceNum}</td>
    <td class='alinear'>${value.CD_ReferenceNum}</td>
    <td class='alinear'>${value.CD_ReferenceNum}</td>
    </tr>
    `;
    tbody.innerHTML += html;
};

export const showUserBitacora = async()=>{
    htmlUsersBitacora()
};