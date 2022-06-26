const Character = ({character}) => {
    const {name, status, species, gender, image} = character;
    return (
        <div>
            <h2>{name}</h2>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <img src={`${image}`} alt={name}/>
        </div>
    )
};

export { Character };