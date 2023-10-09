import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="list-item-image" />
      <h1 className="package-item-heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PackageItem
