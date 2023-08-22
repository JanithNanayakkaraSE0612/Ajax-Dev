function display(vehicle){
    const vehicleinfo = ` <h1> Brand Mobel Year</h1>
    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" width="800" height="500">
    <table>
        <tr>
            <th>Price :</th>
            <td>${vehicle.price}</td>
        </tr>
        <tr>
            <th>Price :</th>
            <td></td>
        </tr>
        <tr>
            <th>Price :</th>
            <td></td>
        </tr>
        <tr>
            <th>Price :</th>
            <td></td>
        </tr>
        <tr>
            <th>Price :</th>
            <td></td>
        </tr>
        <tr>
            <th>Price :</th>
            <td></td>
        </tr>
        <tr>
            <th>Price :</th>
            <td></td>
        </tr>
    </table>`

    document.querySelector(".container").innerHTML =vehicleinfo;
}
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        display(JSON.parse(xhr.responseText));
    }
}
xhr.open('GET','vehicle.json');
xhr.send();