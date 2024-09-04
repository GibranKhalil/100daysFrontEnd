const icons = [
    {
        icon: "group",
        label: "Dados Pessoais",
        group: "general"
    },
    {
        icon: "chat",
        label: "Mensagens",
        group: "general"
    },
    {
        icon: "notifications",
        label: "Notificações",
        group: "general"
    },
    {
        icon: "location_on",
        label: "Localização",
        group: "general"
    },
    {
        icon: "groups",
        label: "Comunidade",
        group: "general"
    },
    {
        icon: "group",
        label: "FAQs",
        group: "settings"
    },
    {
        icon: "settings",
        label: "Configurações",
        group: "settings"
    },
]

const navigationicons = ["home", "monitoring" , "chat" , "account_circle" ]

const generalList = document.getElementById('generalList');
const settingsList = document.getElementById('settingsList')
const footerNavigation = document.getElementById('footerNavigation')

icons.filter(icon => icon.group === "general").forEach(({ icon, label }) => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="material-symbols-rounded">${icon}</i> <a href="#">${label}</a> <i class="material-symbols-rounded">chevron_right</i>`;
    generalList.appendChild(li);
});

icons.filter(icon => icon.group === "settings").forEach(({ icon, label }) => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="material-symbols-rounded">${icon}</i> <a href="#">${label}</a> <i class="material-symbols-rounded">chevron_right</i>`;
    settingsList.appendChild(li);
});

navigationicons.forEach(icon => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="material-symbols-rounded">${icon}</i>`;
    footerNavigation.appendChild(li);
})