function handleButtonClick(){

}

export function EntryPage(){
    return (
        <>
            <body>
            <div className='at-container'>
                <div><h2>Have some</h2>
                    <div className='at-item'>common sense</div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="user-input">
                <input className="text-box" type="text" id="userName" placeholder="Enter a name" size="40"/>
                <button>Enter</button>
            </div>
            </body>
        </>
    )
}

export default EntryPage;