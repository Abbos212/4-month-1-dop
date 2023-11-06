
const Work = ({num, setNum}) => {
    return (
        <div>
           




            <button onClick={() => {
        if (num < 15) setNum(num + 1)
      }}>+</button>
      
      <button onClick={() => {
        if (num > 0) setNum(num - 1)
      }}>-</button>
      
      <button onClick={() => {
        setNum(0)
      }}>reset</button>

      <button onClick={() => {
        setNum(15)
      }}>max</button>

      <button onClick={()=>{
        setNum(num < 5)
        if (num > 0)setNum(num - 5)
      }}>-5</button>

       <button onClick={()=>{
        setNum(num < 5) 
        if (num < 15)setNum(num + 5)
      }}>+5</button>
        </div>
    );
}

export default Work;
