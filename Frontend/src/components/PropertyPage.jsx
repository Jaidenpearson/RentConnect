import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { get_rental_property } from "../api/rentalEndpoints";
import ApplyButton from "./Button Components/ApplyButton";

function PropertyPage({}) {

  const [ property, setProperty ] = useState('')

  const params = useParams()

  const fetchProperty = async (params) => {
    try {
      const rentalProperty = await get_rental_property(params.id)
      setProperty(rentalProperty)
      console.log(rentalProperty)
    } catch (error) {
      console.error("unable to fetch property")
    }
  }

  useEffect(() => {
    fetchProperty(params)
  }, [])

  return (
  <>
    <div>{property.title}</div>
    <div>{property.description}</div>
    <div>${Number.parseFloat(property.fees)}</div>
    <div>{property.sq_feet} sq/ft</div>
    <div>{property.utilities_included ? "Utilities included" : "Utilities not included"}</div>
    <img src={property.images_urls} />
    <ApplyButton propertyId={ property.id }/>
    </>
  )
}

export default PropertyPage