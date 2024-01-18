import PermissionGroupTable from './PermissionGroupTable';
import './styles.css';

const PermissionGroup = () => {
  return (
    <>
      <div className="permission-group-crud-container">
        <form>
          <h1 className="permission-group-crud-title">Grupo de Permissões</h1>
          <div className="permission-group-crud-inputs-container">
            <label>Código:</label>
            <input type="text" className="base-input" />
            <div className="permission-group-crud-inputs-label-right">
              <label>Descrição:</label>
              <input type="text" className="base-input" />
            </div>
            <div className="permission-group-crud-buttons-container">
              <button className="btn btn-primary">SALVAR</button>
              <button className="btn btn-primary">CANCELAR</button>
            </div>
          </div>
        </form>

        <PermissionGroupTable />
      </div>
    </>
  );
};

export default PermissionGroup;
