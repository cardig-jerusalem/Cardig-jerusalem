const members = {
  executive: [
    { position: "External President", email: "president-ext@cardig.me", name: "Salem Qupp", image: "Salem.jpeg" },
    { position: "Internal President", email: "president-int@cardig.me", name: "ZainEdeen Zyadah", image: "Zain.jpeg" },
    { position: "Vice President", email: "vicepresident@cardig.me", name: "Seham Madaka", image: "Seham.jpeg" },
    { position: "Secretary General", email: "secretary@cardig.me", name: "Ihab Hemieid", image: "Ihab.jpeg" },
    { position: "Treasurer", email: "treasurer@cardig.me", name: "Lana Helal", image: "Lana.jpeg" }
  ],
  science: [
    { position: "Cardiology Education Officer (CaEO)", email: "caeo@sci.cardig.me", name: "Mohammad Shweiki", image: "Shweiki.jpeg" },
    { position: "Cardiology Research Officer (CaRO)", email: "caro@sci.cardig.me", name: "Elie Malki", image: "Elie.jpeg" },
    { position: "Cardiology Skills Officer (CaSO)", email: "caso@sci.cardig.me", name: "Joyce Morcos", image: "Joyce.jpeg" },
    { position: "Cardiology Journal Club Officer (CaJO)", email: "cajo@sci.cardig.me", name: "Yaman Ayasa", image: "Yaman.jpeg" },
    { position: "Cardiology Guidelines Officer (CaGO)", email: "cago@sci.cardig.me", name: "Asad Omari", image: "Asad.jpeg" }
  ],
  support: [
    { position: "Cardiology Projects Officer (CaPO)", email: "capo@sup.cardig.me", name: "Mohammad Raddad", image: "Raddad.jpeg" },
    { position: "Cardiology Brand Officer (CaBO)", email: "cabo@sup.cardig.me", name: "Reem Bzoor", image: "Reem.jpeg" },
    { position: "Cardiology Members Officer (CaMO)", email: "camo@sup.cardig.me", name: "Hala Hamri", image: "Hala.jpeg" },
    { position: "Cardiology Technical Officer (CaTO)", email: "cato@sup.cardig.me", name: "Rami Muallem", image: "Rami.jpeg" }
  ]
};

function createCard(member) {
  return `
    <div class="card">
      <img src="images/${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p><strong>${member.position}</strong></p>
      <p><a href="mailto:${member.email}">${member.email}</a></p>
    </div>`;
}

function renderCards(membersArray, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = membersArray.map(createCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards(members.executive, 'executiveCards');
  renderCards(members.science, 'scienceCards');
  renderCards(members.support, 'supportCards');
});
