
const FrasesCard = ({fraseIndex}) => {
    return (
        <div className="frases-container">
            <h3>{fraseIndex.phrase}</h3>
            <br />
            <p>Autor: {fraseIndex.author}</p>
        </div>
    );
};

export default FrasesCard;