import Carousel from './carousel'
import style from './page1.module.css'




function Page1(){



    return (
        <body>
            <div className={style.Sect1}>
                Section1
                <div className={style.subsect1}>
                    PLEASE WORK
                </div>
            </div>



            <div className={style.Sect2}>
                <Carousel></Carousel>
            </div>




            <div className={style.Sect3}>
                <label rows='4'>Comment Here!</label>
                    <textarea>

                    </textarea>

                    <button>
                        submit
                    </button>
                    <button>
                        cancel
                    </button>
                
                
                </div>
            
        </body>
    )
}

export default Page1