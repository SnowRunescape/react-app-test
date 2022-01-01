import TranscendFooter from "../components/TranscendFooter";
import TranscendHeader from "../components/TranscendHeader";

export default ({children}) => {
    return (
        <>
            <div style={{
                borderRadius: 5,
                width: '5px'
            }}>

            </div>
            <TranscendHeader/>
            {children}
            <TranscendFooter/>
        </>
    );
}