import { TableType } from '@customTypes/user';
import React from 'react';
import Icon from './Icon';
import Button from './Button';

const Table: React.FC<TableType> = ({ headers, records, actions }) => {
  return (
    <React.Fragment>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            {headers.map((header, index) => (
              <th key={index} className="min-w-[150px] py-4 px-4 font-medium text-black xl:pl-11">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records &&
            records.map((item, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <p className="text-black">{item.name}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black">{item.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      item.email_verified ? 'bg-success text-success' : 'bg-warning text-warning'
                    }`}
                  >
                    {item.email_verified ? 'Verified' : 'Not verified'}
                  </p>
                </td>
                {/* Actions */}
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    {actions.map((action, key) => (
                      <Button
                        isIcon={true}
                        classes="hover:text-primary"
                        key={key}
                        onClickAction={() => action.action(item.id)}
                      >
                        <Icon icon={action.icon} />
                      </Button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
