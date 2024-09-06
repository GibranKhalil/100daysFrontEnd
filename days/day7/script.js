const events = [
    {
        titulo: 'Festival Indie São Paulo',
        descricao:
            'Festival anual de bandas indie, trazendo artistas locais e internacionais.',
        ingressos_disponiveis: true,
        data: 'Hoje',
        horario: '18:00',
    },
    {
        titulo: 'Concerto Sinfônico no Ibirapuera',
        descricao:
            'Orquestra Filarmônica de São Paulo apresenta peças de compositores clássicos no Auditório Ibirapuera.',
        ingressos_disponiveis: false,
        data: '20 de Setembro',
        horario: '20:00',
    },
    {
        titulo: 'Show de Jazz no Sesc Paulista',
        descricao:
            'Uma noite de jazz contemporâneo com grandes músicos brasileiros e internacionais.',
        ingressos_disponiveis: true,
        data: '28 de Setembro',
        horario: '21:00',
    },
    {
        titulo: 'Rock no Allianz Parque',
        descricao:
            'Grandes bandas de rock se reúnem para uma noite inesquecível no Allianz Parque.',
        ingressos_disponiveis: true,
        data: '05 de Novembro',
        horario: '19:00',
    },
];

const eventsList = document.getElementById('eventList');

events.forEach((event) => {
    const li = document.createElement('li');
    li.innerHTML = `<article>
    <p>${event.data}</p>
    <time>${event.horario}</time>
    </article>
                    <hgroup>
                    <h3>${event.titulo}</h3>
                    <h4>${event.descricao}</h4>
    </hgroup>
                    <button class=${
                        event.ingressos_disponiveis
                            ? 'normalButton'
                            : 'soldOutButton'
                    }>${
        event.ingressos_disponiveis ? 'Buy a Ticket' : 'Sold out'
    }</button>`;
    eventsList.appendChild(li);
});
