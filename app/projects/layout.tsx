import Header from '../../components/Header'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
    <div className="py-20 md:px-16">{children}</div>
    </>
  )
}

export default layout
