// alert("hello");

if (localStorage.getItem("contacts") == undefined) {
  localStorage.setItem("contacts", "[]");
}

let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));

for (i = 0; i < contacts.length; i++) {
  result += `
    <div class="contact_item">
        <i class="far fa-user fa-2x color-primary"></i>
        <div class="contact_item_info">
            <h4>${contacts[i].name}</h4>
            <p>+91 ${contacts[i].phone}</p>
        </div>
        <span onclick="deleteContact('${contacts[i].id}')" class="onclick">&#10060;</span>
    </div>
    `;
}

// document.getElementsByClassName(contact_body).innerHTML = result;
document.getElementsByClassName("contact_body")[0].innerHTML = result;

function submitContact(e) {
  e.preventDefault();
  let contact_name = document.getElementById("name").value;
  let contact_number = document.getElementById("number").value;

  //   console.log(contact_name, contact_number);

  let contacts = JSON.parse(localStorage.getItem("contacts"));

  let contact = {
    id: Math.random().toString(36).substr(2, 9),
    name: contact_name,
    phone: contact_number,
  };

  contacts.unshift(contact);

  localStorage.setItem("contacts", JSON.stringify(contacts));
  document.getElementById("name").value;
  document.getElementById("number").value;

  //   console.log(contacts);

  location.reload();
}

function deleteContact(id) {
  let contacts = JSON.parse(localStorage.getItem("contacts"));
  contacts = contacts.filter(function (contact) {
    return contact.id != id;
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));
  location.reload();
  //   contacts.localStorage(contacts);
}
