import { useEffect, useState } from "react"
function App() {
  const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    // setLoading(true)
    fetch("https://quietstreamfinancial.github.io/eng-recruiting/transactions.json")
      .then(response => response.json())
      .then(json => setUsers(json))

  }, [])

  const totalTransaction = users.reduce((group, product) => {
    const { account_number } = product;
    group[account_number] = group[account_number] ?? [];
    group[account_number].push(product);
    return group;
  }, {});



  const customerAccount = users.reduce((group, product) => {
    const { customer_id } = product;
    group[customer_id] = group[customer_id] ?? [];
    group[customer_id].push(product);
    return group;
  }, {});
  return (
    <div className="App">

        <>
          <h1>Bank Users</h1>
          <div>
            <p>
            </p>
          </div>
          <table border={1}>
            <tr>
              <th>Account Number</th>
              <th>Balance</th>
              <th>Account Type</th>
              <th>Name of Customer</th>
              <th>Email Of the Customer</th>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.account_number}</td>
                <td>{user.transaction_amount}</td>
                <td>{user.account_type}</td>
                <td>{user.customer_name}</td>
                <td>{user.customer_email}</td>
              </tr>
            ))}
          </table>
        </>
        <p>{totalTransaction}</p>
        <p>{customerAccount}</p>
    </div>
  )
}
export default App
