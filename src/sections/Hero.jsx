import { LinePattern } from "../components/common/DecorativeShape"
import { Texthighlight } from "../components/common/DecorativeShape"
import { Wave } from "../components/common/DecorativeShape"

const Hero = () => {
    return (
        <section className="relative pt-16 select-none ">
            <div className="mx-auto flex max-w-6xl flex-col items-center">
                <h1 className="text-center font-primary leading-loose tracking-tight z-10 py-4">
                    <div className="leading-tight">
                        The{" "}
                        thinkers{" "}
                        and
                    </div>

                    <div className="leading-tight">
                        doers were{" "}
                        <Texthighlight text="changing" color="pink" height={100} width={74} left={32}/>
                    </div>

                    <div className="leading-tight">
                        the{" "}
                        <Texthighlight text="status" color="green" height={85} width={120} left={-10}/>{" "}
                        Quo with
                    </div>
                </h1>
                <div>

                </div>

                <p className="py-4 text-center text-[16px] leading-7 color-black ">
                    We are a team of strategists, designers, communicators,researchers. Together,<br />
                    we believe that progress only happens whenyou refuse to play things safe.
                </p>
            </div>
            <div className="absolute top-34 left-94 z-0">
                <LinePattern />
            </div>
            <div className="absolute top-50 right-0 ellipse">
            </div>
            <div className="absolute top-64 right-282">
                <Wave />
            </div>

        </section>
    )
}

export default Hero