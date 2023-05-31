import { nanoid } from "nanoid";
import {toast} from 'react-toastify'

const SingleColor = ({ index, color }: { index: number; color: any }) => {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if(navigator.clipboard){  
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        
      }

    }else{
      toast.error('Clipboard access not available.')
    }
  }
  return (
    <article
      key={nanoid()}
      style={{ background: `#${hex}` }}
      className={index > 10 ? "color color-light" : "color"}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};
export default SingleColor;
