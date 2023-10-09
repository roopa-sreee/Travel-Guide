import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageItem from './components/PackageItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLoading: true,
    packagesList: [],
  }

  componentDidMount() {
    this.getPlacesList()
  }

  getPlacesList = async () => {
    const data = await fetch('https://apis.ccbp.in/tg/packages')
    if (data.ok === true) {
      const fetchedData = await data.json()
      const packAges = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))

      this.setState({packagesList: packAges, isLoading: false})
    }
  }

  render() {
    const {isLoading, packagesList} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="packages-list-ul">
            {packagesList.map(each => (
              <PackageItem key={each.id} packageDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
