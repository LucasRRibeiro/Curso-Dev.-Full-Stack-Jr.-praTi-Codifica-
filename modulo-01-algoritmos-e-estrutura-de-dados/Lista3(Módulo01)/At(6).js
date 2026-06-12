/*
6. Crie um array de objetos representando músicas, cada uma com título, artista e
    duração em segundos. Use for...of para exibir cada música no formato "Artista —
    Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
    mesmo formato.
*/

let duracaoTotal = 0
let minutos
let segundos

let musicas = [
    { titulo: "Shape of You", artista: "Ed Sheeran", duracao: 233 },
    { titulo: "Blinding Lights", artista: "The Weeknd", duracao: 200 },
    { titulo: "Antítodo", artista: "Matheus e Kauan", duracao: 182 }
]

for (let musica of musicas) {
    minutos = Math.floor(musica.duracao / 60)
    segundos = musica.duracao % 60
    console.log(`${musica.artista} — ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, '0')})`) // padStart para garantir que os segundos tenham sempre 2 dígitos
}

musicas.forEach(musica => {
    duracaoTotal += musica.duracao
})

let minutosTotal = Math.floor(duracaoTotal / 60)
let segundosTotal = duracaoTotal % 60
console.log(`\nDuração total: ${minutosTotal}:${segundosTotal.toString().padStart(2, '0')}`)