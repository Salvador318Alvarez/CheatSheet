const ArrayMethods = () => {
    const numbers = [1, 2, 3];
    numbers.forEach(number =>
        console.log(number))

    return ( 
    <>
    <h2>Array Methods</h2> 
    <h3>ForEach</h3>
    <div className='code'>
        <code>{'const numbers = [1, 2, 3];'}</code>
        <code>{'numbers.forEach(number =>'}</code>
        <code>{'console.log(number))'}    </code>
    </div>
    
    </>
    );
}

 
export default ArrayMethods;