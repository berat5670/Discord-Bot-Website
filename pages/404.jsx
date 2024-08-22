import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Bir Hatayla Karşılaştın',
        'Hatalı Bir Komut Girdin!',
        'BRT Pro | 404 Hata'
    ];

    Geri Dön <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

