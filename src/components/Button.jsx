export default function Button({title,color, onClick}){
    const onChangeColor=()=>{
        onClick(color)
    }
    return(
        <button onClick={onChangeColor} className="shadow-md p-1 pl-4 pr-4 mr-2  mb-2 rounded-2xl text-xs font-bold" style={{color:color}}>{title}</button>
    )
}