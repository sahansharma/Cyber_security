const HeroSection = ({toggle}) =>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>WHERE ALGORITHMS WEAVE SECURITY</h1>
                <p>In today's rapidly evolving digital landscape, the gap between emerging
                     threats and security defenses grows wider every day. Our mission is to
                      close that gap by advancing cryptographic algorithms and implementing cutting-edge
                       security solutions to stay ahead of the bad actors.</p>
                       <div className="hero-btn">
                <button onClick={toggle}>Launch Encryption</button>
                <button>Algorithm 101</button>
            </div>
            </div>
            
            <div className="hero-image">
                <img src="/images/binary.png" alt="hero-image" />
            </div>
    </main>);
};
export default HeroSection;