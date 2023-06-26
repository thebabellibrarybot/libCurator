const CollectionButton = () => {

    const save = true;

    return (
        <div>
            {save ? 
            <>
            <button>create</button>
            </>
            :
            <>
            <button>save</button>
            <button>delete</button>
            </>
            }
        </div>
    )
}
export default CollectionButton;