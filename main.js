const body = document.querySelector(".container");
const API = "https://ipinfo.io/json";

const getData = async () => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        render(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

function render(obj) {
    const box2 = document.querySelector(".box2");
    const [latitude, longitude] = obj.loc.split(",");

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    iframe.width = 600;
    iframe.height = 400;
    iframe.style.border = 0;

    box2.innerHTML = `
        <p class="p1">Mamlakat: ${obj.country}</p>
        <p class="p2">Shahar: ${obj.city}</p>
        <p class="p3">Hudud: ${obj.region}</p>
        <p class="p4">IP Manzilingiz: ${obj.ip}</p>
        <p class="p5">Joylashuv: ${latitude}, ${longitude}</p>
    `;

    box2.appendChild(iframe);
}