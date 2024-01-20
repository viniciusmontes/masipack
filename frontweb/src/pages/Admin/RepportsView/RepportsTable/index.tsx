import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';

import './styles.css';

const RepportsTable = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);

  const [maxDate, setMaxDate] = useState(max);

  registerLocale('pt-BR', ptBR);

  return (
    <>
      <div className="repports-table-container">
        <div>
          <div className="reports-form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              locale="pt-BR"
              className="reports-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="reports-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              locale="pt-BR"
              className="reports-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <button>Aplicar</button>
          <button>Exportar para PDF</button>
          <button>Exportar para CSV</button>
        </div>
        <table className='table table-striped repports-table'>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Máquina</th>
              <th>Usuário</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Objeto</th>
              <th>Descrição</th>
              <th>Valor Anterior</th>
              <th>Valor Atual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>empresa</td>
              <td>maquina</td>
              <td>usuario</td>
              <td>data</td>
              <td>hora</td>
              <td>objeto</td>
              <td>descrição</td>
              <td>valorAnterior</td>
              <td>valorAtaual</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RepportsTable;
