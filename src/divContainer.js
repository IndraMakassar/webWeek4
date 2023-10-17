import React, { useState } from "react";

import profil from "./profil.jpg"

function DivContainer() {
    const [circle, setCircle] = useState(false);

    const foto = React.createElement('img', {src: profil, className: 'foto', alt: 'logo'});
    const fotoElement = React.createElement('div', {className: `${circle ? 'foto-lingkaran' : ''}`}, foto);
    const namaElement = React.createElement('p', {className: 'nama'}, 'Antonius Indra Dharma Prasetya');

    const gender = React.createElement('li', null, 'gender: born male, bad circumcision, raised female');
    const career = React.createElement('li', null, 'career: Student');
    const button = React.createElement('button', {onClick: () => setCircle(prev => !prev)}, "Click Me")
    const poinKiriElement = React.createElement('ul', {className: 'poin-kiri'}, button, gender, career);

    const experience1 = React.createElement('li', null, '2020-2021 Head of computer extracurricular (SMAn 2 Makassar)');
    const experience2 = React.createElement('li', null, '2022-2023 Head of weeb community (STIE Ciputra Makassar)');
    const experience3 = React.createElement('li', null, '2023-now Head of Japanese culture extracurricular (STIE Ciputra Makassar)');
    const experience = React.createElement('li', null, experience1, experience2, experience3);
    const angkatan = React.createElement('li', null, 'Angkatan: 2022');
    const major = React.createElement('li', null, 'Major: informatics');
    const hobby = React.createElement('li', null, 'Hobby: Reading and anime');
    const poinKananElement = React.createElement('ul', {className: 'poin-kanan'}, angkatan, major, hobby, experience);

    const rowAtas = React.createElement('div', {className: 'row-atas'}, fotoElement, namaElement);
    const rowBawah = React.createElement('div', {className: 'row-bawah'}, poinKiriElement, poinKananElement);
    return React.createElement('div', {className: 'App-header'}, rowAtas, rowBawah);
}

export default DivContainer;