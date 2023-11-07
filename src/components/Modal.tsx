import loading from '../assets/loading.svg'
import check from '../assets/CheckIcon.svg'
const Modal = ({ status }: { status: boolean }) => {
    return (
        <aside className='fixed top-0 left-0 w-full h-full bg-black/[0.55] grid place-items-center'>
            <div className="bg-white w-[80vw] lg:w-[60vw] h-[40vh] lg:h-[80vh] grid place-items-center rounded">
                {
                    status ?
                        <div className="grid gap-6 place-items-center">
                            <img src={check} alt="check" />
                            <h2 className='font-normal text-2xl'>
                                Bid submitted successfully
                            </h2>
                        </div>
                        :
                        <div className="grid gap-6 place-items-center">
                            <img src={loading} alt="loading" className='animate-spin' />
                            <h2 className='font-normal text-2xl'>
                                Submitting your bid...
                            </h2>
                        </div>
                }
            </div>
        </aside>
    );
};

export default Modal;
