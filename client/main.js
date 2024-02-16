document.addEventListener('DOMContentLoaded', function () {
    const complimentBtn = document.getElementById("complimentButton");

    const getCompliment = () => {
        axios.get("http://localhost:4000/api/compliment/")
            .then(res => {
                const data = res.data.compliment; // Access 'compliment' property from response data
                alert(data);
            })
            .catch(error => {
                console.error('Error fetching compliment:', error);
            });
    };

    complimentBtn.addEventListener('click', getCompliment);

    document.getElementById('fortuneButton').addEventListener('click', () => {
        axios.get('http://localhost:4000/api/fortune')
            .then(response => {
                alert(response.data.fortune);
            })
            .catch(error => {
                console.error('Error fetching fortune:', error);
            });
    });

    document.getElementById('inspirationButton').addEventListener('click', () => {
        axios.get('http://localhost:4000/api/inspiration')
            .then(response => {
                alert(response.data.inspiration);
            })
            .catch(error => {
                console.error('Error fetching inspiration:', error);
            });
    });

    document.getElementById('setGoalButton').addEventListener('click', () => {
        const goal = document.getElementById('goalInput').value;
        alert(`Goal set: ${goal}`);
    });

    document.getElementById('shareButton').addEventListener('click', () => {
        const achievement = prompt('Enter your achievement:');
        if (achievement) {
            alert(`Congratulations on your achievement: ${achievement}`);
        }
    });
    
});
