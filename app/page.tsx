
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
    
      <Beliefs />
      <Wework />
      <Ourteam />
      {/* <Featured /> */}
      <Manage />
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta />
    </main>
  )
}
