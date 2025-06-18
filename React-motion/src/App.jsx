import React from 'react'
import {motion,useScroll} from 'motion/react'
const App = () => {
  const  scrollYProgress  = useScroll().scrollYProgress;
  return (
<div>
    {/* <motion.div className='bg-red-500 w-20 h-20 rounded-lg flex items-center justify-center text-white'
    id="box"
    initial={{
      scale: 5,
      x: 0,
      y: 0,
      rotate: 0,
    }}
    drag
animate={{
x:[0,1000,1000,0],//right //key frame motion
// x:-2000,//left
y:[0,0,2000,2000,0],// down
// y:-1000,//up
rotate:360,//rotate

    }}
    whileHover={{
      backgroundColor: "blue",
    }}
    whileTap={{
      scale: 0.8,
      backgroundColor: "pink",
    }}

    transition={{
      delay: 1,
      duration: 5,
      repeat: 2,
      scale: 8,
      ease: "anticipate",
    }}
    dragDirectionLock="true" //drag only in one direction
    >
      <p style={{fontsize:"10px"}}>dhiru</p>
    </motion.div> */}
  
    <motion.div  className="text-center p-20 font-mono">
      
      <h1 className='text-8xl mb-4'>some text</h1>
      <motion.div style={{
        scaleX: scrollYProgress,
      }} 
       className= '  bg-red-500 origin-left top-0 absolute w-full h-10 left-0  fixed'></motion.div>
      <h3 className='text-7xl p-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga voluptatum nesciunt, labore repellat quis veritatis sit minus dolorum ipsum rerum distinctio. Non recusandae dolores modi ipsam, facilis sit fuga!<br></br><br></br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias, hic assumenda tenetur qui molestias nemo aut veniam veritatis quibusdam illum rerum voluptatem fuga minus atque quos accusantium harum temporibus saepe. At dolor numquam earum alias molestias sequi. Impedit accusantium aliquam adipisci quam ad quis fugiat numquam ipsa vel laudantium alias dolor nihil voluptas, facilis illum itaque necessitatibus consectetur. Incidunt qui mollitia, iste, autem odio nihil porro molestias dicta sint ipsa maiores minus aperiam nemo dolores voluptate voluptatum magni libero. Laboriosam commodi nulla labore modi eveniet, perferendis alias! Nihil sit fugiat amet sunt suscipit et optio quia, necessitatibus rem deleniti.<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum inventore aliquid. Unde explicabo labore dolorum, recusandae architecto accusantium modi dolorem amet, repellendus nobis debitis accusamus, odit iure quo sapiente nemo necessitatibus mollitia ad! Quod quisquam enim est quasi officiis, quia qui asperiores soluta, expedita quis, officia voluptatem. Corrupti exercitationem, sint facilis veritatis excepturi porro blanditiis commodi facere cum hic unde omnis labore rerum mollitia consectetur tempore. Perferendis, minus earum corporis quasi atque, et veniam itaque nesciunt rerum eveniet at quae delectus totam provident quod? Corrupti, aliquam iste. Odio distinctio tenetur est! Tempore obcaecati cupiditate corrupti repudiandae iusto, excepturi voluptate aspernatur dicta, a eos, quisquam expedita quidem. Labore dolorem itaque doloremque veritatis consectetur suscipit laborum. Odit a nemo consequuntur illum tempore blanditiis consectetur quae ipsam tenetur voluptas sequi odio, alias inventore quod deserunt neque dolorum quam eius sint. Neque quam odit dicta? Sint laudantium, earum quisquam quos, doloribus fuga esse nesciunt eius voluptatibus consequuntur maxime provident ipsum ratione ea officiis quo ex praesentium dicta corporis voluptatum eum autem id eligendi minus? Odit, illum, debitis totam repudiandae sequi exercitationem inventore excepturi tempora enim ratione temporibus! Corporis, quos error ullam consectetur sed nisi quidem. Dolores quasi minus inventore eveniet a similique sit!<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe expedita, laboriosam eum quia suscipit tempora impedit deleniti provident labore pariatur culpa, fugiat a nostrum veniam iste tempore iure modi quidem nesciunt sunt similique. Quae praesentium sit assumenda at esse aliquid nemo voluptatem ex suscipit et, commodi voluptas neque eos totam provident aspernatur corrupti cupiditate dolorum dolores autem quis? Corporis quaerat cum eligendi minima, minus suscipit maiores laborum vitae repellendus ipsum voluptate autem omnis ratione, iure quam doloribus magnam reiciendis ex provident aspernatur nulla? Nam architecto esse deserunt temporibus soluta reprehenderit, pariatur, accusantium expedita officia illo provident quae quasi placeat laborum inventore cumque maxime fugiat necessitatibus unde. Unde a obcaecati incidunt quasi, laborum similique animi libero ea reprehenderit beatae, provident, voluptas vero numquam quos natus consectetur esse perferendis dolorem. Mollitia dicta eos voluptatum ducimus nisi a tenetur distinctio, commodi sequi fuga voluptas saepe dolores nihil sunt corporis velit, esse similique alias, quia obcaecati fugiat? Omnis sequi unde quod, facilis eveniet architecto quas, quam, doloremque sit beatae odio! Voluptatum nihil fugiat eum corrupti, assumenda nostrum. Praesentium, dolorem, sint nobis minima, facere consequuntur ipsam dolor quis accusantium doloribus tempore quod iusto omnis vel. Ad dolorem exercitationem labore porro consectetur neque? Corporis, obcaecati.<br></br><br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ea, sint ipsa exercitationem magnam fuga asperiores eligendi accusamus rerum voluptatem, est dolorum aliquid. Repudiandae, facilis dolorem. Asperiores saepe ipsa earum soluta! Voluptatem quo earum iusto officiis! Aliquid doloribus ipsum temporibus neque maiores earum ipsa, dicta, numquam tempora consequatur commodi quasi beatae odio deserunt voluptatum minima ratione itaque porro repellat velit cupiditate natus! Itaque distinctio vitae cupiditate animi. Dolor quibusdam obcaecati debitis facere sint vero quae nobis totam voluptatum, quisquam tempore accusantium aperiam a natus eligendi? Totam molestias nihil, nisi eum provident quis neque maxime optio voluptate veniam laudantium, nam omnis non eaque voluptatem reprehenderit iusto consequuntur tempora quae repellendus consectetur eos. Fugit voluptates officiis et nam, laudantium nihil voluptatem ipsa? Voluptatum necessitatibus sit, non possimus enim at quas minima sunt ipsam impedit amet voluptate, delectus repellat et accusantium consequatur aliquid adipisci sed aut. Earum id consequatur commodi dolore amet corrupti qui, aut sint delectus voluptate eius sapiente porro, eaque dolor illum hic necessitatibus voluptatibus asperiores iste, quo culpa ratione laudantium in. Quod provident iure earum animi repellat. Dolore autem eligendi facere, nostrum voluptatem repellat soluta expedita quos quidem laudantium veniam pariatur similique perspiciatis deserunt architecto iure eum quam repudiandae mollitia.<br></br><br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptate, excepturi odio voluptates autem, vel perferendis similique facere illo repellendus iusto necessitatibus ipsum pariatur sapiente ipsa? Consequatur dolorem cumque ducimus necessitatibus expedita, eius molestiae nesciunt cupiditate rem magnam quod molestias quasi officiis repudiandae sint unde libero voluptates quae quas sed delectus. Sit nemo, distinctio consequatur, voluptates blanditiis quia laboriosam suscipit facere adipisci enim perspiciatis maxime tempora ea ipsum in deserunt corrupti dolor accusamus aperiam laborum exercitationem, ipsa earum! Numquam, repellat commodi corporis veritatis impedit illum fuga autem fugiat, libero, aspernatur aliquam consequuntur minima explicabo nesciunt aperiam laboriosam expedita adipisci possimus perspiciatis assumenda. Cum voluptatem cumque impedit ut eius laudantium repellat iusto quasi reprehenderit magni similique vel maiores consectetur tenetur, praesentium non! Corrupti quae quo aliquam ratione vel ullam cumque. Fuga, fugit, repellat tenetur aperiam rerum architecto laborum, reiciendis at autem dolorem rem sequi alias blanditiis saepe perspiciatis unde provident neque! Impedit, sed voluptatum! Distinctio vel rem repellendus, voluptatem facilis autem nihil adipisci officiis id natus. Iste unde aut nisi ratione quis dolorem, exercitationem suscipit quidem accusamus, porro sit earum voluptatibus, quisquam distinctio architecto eveniet reiciendis! Sunt, possimus? Dignissimos quo expedita rem doloremque culpa veniam, voluptatem ipsam voluptatum! Eligendi, enim repellendus.<br></br><br></br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, atque delectus. Eum, fuga error maxime voluptate corporis id cum cumque recusandae, molestias illum sit eius optio voluptas modi quidem magni minima. Iure aperiam nulla deleniti! Ullam pariatur temporibus quod. Laboriosam sunt suscipit quisquam vitae, mollitia harum dolorem veniam reprehenderit minus voluptates atque provident? Dolorum, eum labore consequatur ex suscipit repellendus iure, animi rerum eius impedit facilis dolore, voluptates accusantium. Maiores, voluptates repellat. Sit saepe, eveniet repudiandae unde architecto accusamus error. Beatae nemo, vero numquam corrupti non eius minus cupiditate temporibus eligendi eum exercitationem? Reprehenderit magni repellendus, voluptatibus quibusdam harum repudiandae nobis vitae nisi, maxime aliquam expedita tenetur nostrum, cum a suscipit eaque ab dignissimos ducimus explicabo molestiae quaerat placeat error pariatur! Veniam ea velit mollitia sunt quo nesciunt dolor consectetur qui. Aspernatur cumque hic beatae alias impedit error! Ea, impedit? Distinctio harum minima deleniti obcaecati similique commodi eveniet. Eius enim consequuntur explicabo numquam impedit voluptatibus aperiam odio itaque. Sequi, iure! Exercitationem eveniet, non corporis saepe repellat architecto excepturi necessitatibus deleniti neque nulla quas aut? Repellat, magnam ab? Autem quasi facilis odit. Tempora iste ad est ex labore, culpa id esse architecto atque. Earum autem suscipit minima perferendis reprehenderit laboriosam ullam.

      </h3>
    </motion.div>

    </div>
  )
  
}

export default App
