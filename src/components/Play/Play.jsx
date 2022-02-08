import * as Tone from 'tone'
import {useEffect, useState} from 'react'
function Play() {
    let [sequence, setSequence] = useState(null)
    let [notes, setNotes] = useState(["C3", "C4", "C5", "C4"])
    let [oscil, setOscil] = useState('sine')
    console.log(notes);
    const [isPlaying, setIsPlaying] = useState(false)
    const [playButtonText, setPlayButtonText] = useState('play')
    let [bpm, setBpm] = useState(80)
    Tone.Transport.bpm.value = bpm
    
    const volumeNode = new Tone.Volume(-9).toDestination();
    const synth = new Tone.MonoSynth({
        oscillator: {
            //can be square, tri or saw, 
            //gonna add a selector shortly
            type: oscil
        }, 
        filter: {
            frequency: 8000,
            type: 'lowpass'
        },
        filterEnvelope: {
            attack: 0.1,
            baseFrequency: "C3",
            octaves: 4
        }


    }).chain(volumeNode, Tone.Destination)

        // Declare handleChange
    const handleChange = (stepNumber, event) => {
        console.log('stepNumber is', stepNumber);
        console.log('value is', event.target.value);
         ;
        setNotes([...notes.slice(0, stepNumber), event.target.value, ...notes.slice(stepNumber + 1)])
    }

     
    
    const startTransport = () => {
        const timeSequence = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time)

        }, notes) 
        setSequence(timeSequence)
        Tone.start() // start tone audio context on user interaction per spec of web audio api
        // !START! 
        Tone.Transport.start();
        //seq.start()
        timeSequence.start()
    }
    
    const stopTransport = () => {
        Tone.Transport.stop()

        sequence.clear()
    }
   
    const playKick = () => {
        kick.start()
    }

    const playSnare = () => {
        snare.start()
    }

    const playHat = () => {
        hihat.start()
    }

    const playTom = () => {
        tom1.start()
    }
    
    

    const kick = new Tone.Player("https://tonejs.github.io/audio/drum-samples/CR78/kick.mp3").toDestination()

    const snare = new Tone.Player("https://tonejs.github.io/audio/drum-samples/CR78/snare.mp3").toDestination()

    const hihat = new Tone.Player("https://tonejs.github.io/audio/drum-samples/CR78/hihat.mp3").toDestination()

    const tom1 = new Tone.Player("https://tonejs.github.io/audio/drum-samples/CR78/tom1.mp3").toDestination()
    
    /* const drumSet = new Tone.Players({
        urls: {
            0: "kick.mp3",
            1: "snare.mp3",
            2: "hihat.mp3", 
            3: "tom1.mp3",
        },
        fadeOut: "16n",
        baseUrl: "https://tonejs.github.io/audio/drum-samples/CR78/"
    }).toDestination() */

    return (
        <>


        <h1>Dammit bobby, play your dang synths</h1>
            <img src="https://art.ngfiles.com/images/1647000/1647974_thejudinator_synth-bobby.jpg?f1613569660"/>
            <br></br>
            <p>Notes</p>
            <form>
            <select 
            name="step" id="step0"
             onChange={(e) => handleChange(0, e)}>
            <option value="C3">C3</option>
            <option value="D3">D3</option>
            <option value="E3">E3</option>
            <option value="G3">G3</option>
            <option value="A4">A4</option>
            <option value="C4">C4</option>
            </select>
            <select
                name="step1" id="step1"
                    onChange={(e) => handleChange(1, e)}>
                <option value="C3">C3</option>
                <option value="D3">D3</option>
                <option value="E3">E3</option>
                <option value="G3">G3</option>
                <option value="A4">A4</option>
                <option value="C4">C4</option>
            </select>
            <select
                name="step2" id="step2"
                    onChange={(e) => handleChange(2, e)}>
                <option value="C3">C3</option>
                <option value="D3">D3</option>
                <option value="E3">E3</option>
                <option value="G3">G3</option>
                <option value="A4">A4</option>
                <option value="C4">C4</option>
            </select>
            <select
                name="step3" id="step3"
                    onChange={(e) => handleChange(3, e)}>
                <option value="C3">C3</option>
                <option value="D3">D3</option>
                <option value="E3">E3</option>
                <option value="G3">G3</option>
                <option value="A4">A4</option>
                <option value="C4">C4</option>
            </select>
                <select
                    name="oscType" id="oscType"
                    onChange={(e) => setOscil(e.target.value)}>
                    <option value="sine">Sine</option>
                    <option value="triangle">Triangle</option>
                    <option value="saw">Saw</option>
                    <option value="square">Square</option>
                    
                </select>
            </form>

            
            <button onClick={startTransport}>{playButtonText}</button>
            <button onClick={stopTransport}>stop</button>
            <br></br>
            <p>drums</p>
            <button onClick={playKick}>Kick</button>
            <button onClick={playSnare}>Snare</button>
            <button onClick={playHat}>Hihat</button>
            <button onClick={playTom}>Tom1</button>
            <br></br> 
            <div className='drumSequencer'>
            <p>kick</p>
            <input  type="checkbox"/>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <br></br>
            <p>snare</p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <br></br>
            <p>hihat</p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <br></br>
            <p>tom1</p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            </div>
            
        </>
    )
}
export default Play;