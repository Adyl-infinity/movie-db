import React, { useState} from 'react';
import ModalVideo from 'react-modal-video'

const Trailer = ({id}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <>
                <ModalVideo channel='youtube' autoplay isOpen={open} videoId={id} onClose={() => setOpen(false)} />
                <button className="btn-trailer" onClick={()=> setOpen(true)}>VIEW DEMO</button>
            </>

        </>
    );
};

export default Trailer;









