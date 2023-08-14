import React from "react";

function TableView({ data }) {
  // data.map((dataUnit) => console.log(`data ${dataUnit.id}`, dataUnit));
  return (
    <section className="antialiased text-gray-600 px-4">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Compnay List</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Company</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Phone</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Address</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data.map((dataUnit) => (
                    <tr key={dataUnit.id}>
                      {console.log(dataUnit.companyImage)}
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={dataUnit.companyImage}
                              width="40"
                              height="40"
                              alt={dataUnit.companyName}
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            {dataUnit.company}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{dataUnit.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {dataUnit.phone}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          {dataUnit.companyAddress}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width="40"
                            height="40"
                            alt="Alex Shatov"
                          />
                        </div>
                        <div className="font-medium text-gray-800">Alex Shatov</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">alexshatov@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        $2,890.66
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">??</div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Philip Harbach
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">philip.h@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        $2,767.04
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">??</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                            width="40"
                            height="40"
                            alt="Mirko Fisuk"
                          />
                        </div>
                        <div className="font-medium text-gray-800">Mirko Fisuk</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">mirkofisuk@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        $2,996.00
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">??</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                            width="40"
                            height="40"
                            alt="Olga Semklo"
                          />
                        </div>
                        <div className="font-medium text-gray-800">Olga Semklo</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">olga.s@cool.design</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        $1,220.66
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">??</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                            width="40"
                            height="40"
                            alt="Burak Long"
                          />
                        </div>
                        <div className="font-medium text-gray-800">Burak Long</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">longburak@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        $1,890.66
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">??</div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableView;
