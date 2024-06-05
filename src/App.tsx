import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";

function App() {

  const { addItem } = useOrder()
  
  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadora de propinas y consumo</h1>
      </header>

      <main className='mx-auto max-w-7xl py-20 grid md:grid-cols-2'>
        <div>
          <h2 className="text-4xl font-black">Menú</h2>
          <div className='space-y-1 mt-10'>
            {menuItems.map((item) => {
                return <MenuItem key={item.id} item={item} addItem={addItem} />
              })

            }

          </div>
        </div>
        <div>
          <h2>Consumo</h2>

        </div>
      </main>
    </>
  )
}

export default App
