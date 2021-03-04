import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Property from '../../models/property';
import formatType from '../../helpers/format-type';
import PropertyService from '../../services/property-service';

type Props = {
  property: Property,
  isEditForm: boolean
};

type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  typeProperty: Field,
  priceProperty: Field,
  zipCodeProperty: Field,
  cityProperty: Field,
  created_by: Field,
  updated_by: Field
}

const PropertyForm: FunctionComponent<Props> = ({property, isEditForm}) => {

  const history = useHistory();

  const [form, setForm] = useState<Form>({
    typeProperty: { value: property.typeProperty },
    priceProperty: { value: property.priceProperty, isValid: true },
    zipCodeProperty: { value: property.zipCodeProperty, isValid: true },
    cityProperty: { value: property.cityProperty, isValid: true },
    created_by: { value: property.created_by, isValid: true },
    updated_by: { value: property.updated_by, isValid: true }
  });

  const types: string[] = [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator url
    if(isAddForm()) {

      const start = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
      const end = ".png";

      if(!form.typeProperty.value.startsWith(start) || !form.typeProperty.value.endsWith(end)) {
        const errorMsg: string = 'L\'url n\'est pas valide.';
        const newField: Field = { value: form.typeProperty.value, error: errorMsg, isValid: false };
        newForm = { ...newForm, ...{ typeProperty: newField } };
      } else {
        const newField: Field = { value: form.typeProperty.value, error: '', isValid: true };
        newForm = { ...newForm, ...{ typeProperty: newField } };
      }
    }

    // Validator priceProperty
    if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.priceProperty.value)) {
      const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
      const newField: Field = { value: form.priceProperty.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ priceProperty: newField } };
    } else {
      const newField: Field = { value: form.priceProperty.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ priceProperty: newField } };
    }

    // Validator zipCodeProperty
    if(!/^[0-9]{1,3}$/.test(form.zipCodeProperty.value)) {
      const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
      const newField: Field = {value: form.zipCodeProperty.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ zipCodeProperty: newField } };
    } else {
      const newField: Field = { value: form.zipCodeProperty.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ zipCodeProperty: newField } };
    }

    // Validator cityProperty
    if(!/^[0-9]{1,2}$/.test(form.cityProperty.value)) {
      const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
      const newField: Field = {value: form.cityProperty.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ cityProperty: newField } };
    } else {
      const newField: Field = { value: form.cityProperty.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ cityProperty: newField } };
    }

    setForm(newForm);
    return newForm.priceProperty.isValid && newForm.zipCodeProperty.isValid && newForm.cityProperty.isValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      property.typeProperty = form.typeProperty.value;
      property.priceProperty = form.priceProperty.value;
      property.zipCodeProperty = form.zipCodeProperty.value;
      property.cityProperty = form.cityProperty.value;
      property.created_by = form.created_by.value;
      property.updated_by = form.updated_by.value;
      isEditForm ? updateProperty() : addProperty();
    }
  }

  const deleteProperty = () => {
    PropertyService.deleteProperty(property).then(() => history.push(`/properties`));
  }

  const isAddForm = (): boolean => {
    return !isEditForm;
  }

  const addProperty = () => {
    PropertyService.addProperty(property).then(() => history.push(`/properties`));
  }

  const updateProperty = () => {
    PropertyService.updateProperty(property).then(() => history.push(`/properties/${property.idProperty}`));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            {isEditForm && (
            <div className="card-image">
              <img src={property.typeProperty} alt={property.priceProperty} style={{width: '250px', margin: '0 auto'}}/>
              <span className="btn-floating halfway-fab waves-effect waves-light">
                <i onClick={deleteProperty} className="material-icons">delete</i>
              </span>
            </div>
            )}
            <div className="card-stacked">
              <div className="card-content">
                {/* Property typeProperty */}
                {isAddForm() && (
                  <div className="form-group">
                    <label htmlFor="typeProperty">Image</label>
                    <input id="typeProperty" type="text" name="typeProperty" className="form-control" value={form.typeProperty.value} onChange={e => handleInputChange(e)}></input>
                    {/* error */}
                    {form.typeProperty.error &&
                      <div className="card-panel red accent-1"> 
                    {form.typeProperty.error} 
                  </div>} 
                </div>
                )}
                {/* Property name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" name="name" className="form-control" value={form.priceProperty.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.priceProperty.error &&
                  <div className="card-panel red accent-1"> 
                   {form.priceProperty.error} 
                  </div>} 
                </div>
                {/* Property zipCodeProperty */}
                <div className="form-group">
                  <label htmlFor="zipCodeProperty">Point de vie</label>
                  <input id="zipCodeProperty" type="number" name="zipCodeProperty" className="form-control" value={form.zipCodeProperty.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.zipCodeProperty.error &&
                  <div className="card-panel red accent-1"> 
                   {form.zipCodeProperty.error}
                  </div>} 
                </div>
                {/* Property cityProperty */}
                <div className="form-group">
                  <label htmlFor="cityProperty">Dégâts</label>
                  <input id="cityProperty" type="number" name="cityProperty" className="form-control" value={form.cityProperty.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.cityProperty.error &&
                  <div className="card-panel red accent-1"> 
                   {form.cityProperty.error}
                  </div>} 
                </div>
                {/* Property types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" name="types" className="filled-in" value={type}></input>
                        <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
 
export default PropertyForm;
