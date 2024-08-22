import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Bir Hatayla Karşılaştın',
        'Bir Hatayla Karşılaştın',
        'Bir Hatayla Karşılaştın'
    ];

    Geri Dön <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

