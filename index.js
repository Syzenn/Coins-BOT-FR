// Suite du code du fichier index.js

// Commande /buy <recompense> pour permettre aux utilisateurs d'acheter des récompenses
function buyItem(message, args) {
    const user = message.author;
    if (!userData.has(user.id)) {
      userData.set(user.id, { balance: 0 });
    }
  
    const itemName = args.join(' ');
    const selectedItem = shopItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());
  
    if (!selectedItem) {
      message.channel.send('Récompense invalide. Veuillez vérifier le nom de la récompense dans le magasin.');
      return;
    }
  
    const itemCost = selectedItem.cost;
    const coinBalance = userData.get(user.id).balance;
  
    if (itemCost > coinBalance) {
      message.channel.send('Vous n\'avez pas assez de coins pour acheter cette récompense.');
      return;
    }
  
    // Effectuer l'achat et déduire le coût de l'objet du solde de l'utilisateur
    userData.get(user.id).balance -= itemCost;
    message.channel.send(`Vous avez acheté "${selectedItem.name}" pour ${itemCost} coins.`);
    // Ici, vous pouvez ajouter le code pour attribuer la récompense à l'utilisateur
  }
  
  // Commande /rankings pour afficher le classement des utilisateurs par balance
  function showRankings(message) {
    const rankedUsers = [...userData].sort((a, b) => b[1].balance - a[1].balance);
  
    let rankingMessage = 'Classement des utilisateurs par balance :\n';
  
    for (let i = 0; i < rankedUsers.length; i++) {
      const user = rankedUsers[i][0];
      const balance = rankedUsers[i][1].balance;
      rankingMessage += `${i + 1}. ${user.tag} - ${balance} coins\n`;
    }
  
    message.channel.send(rankingMessage);
  }
  
  // Commande /help pour afficher l'aide des commandes disponibles
  function showHelp(message) {
    const helpMessage = `
  Liste des commandes disponibles :
  /work - Gagner des coins toutes les 15 minutes en travaillant
  /vocal - Gagner des coins en restant en vocal
  /streaming - Gagner des coins en restant en vocal en streaming
  /unmuted - Gagner des coins en restant en vocal sans être en mode muet
  /messages - Gagner des coins en envoyant des messages
  /roulette <mise> <parie> - Jouer à la roulette avec une mise et un pari
  /shop - Afficher toutes les récompenses disponibles à l'achat
  /buy <recompense> - Acheter une récompense dans le magasin
  /rankings - Afficher le classement des utilisateurs par balance
  /help - Afficher l'aide des commandes
  `;
  
    message.channel.send(helpMessage);
  }
  
  // Événement quand le bot est prêt
  client.once('ready', () => {
    console.log('AniFoBOT est prêt !');
  });
  
  // Événement quand un message est reçu
  client.on('message', (message) => {
    if (!message.content.startsWith('/')) return; // Ignorer les messages qui ne commencent pas par /
  
    const args = message.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'work') {
      workForCoins(message);
    } else if (command === 'vocal') {
      vocalForCoins(message);
    } else if (command === 'streaming') {
      streamingForCoins(message);
    } else if (command === 'unmuted') {
      unmutedForCoins(message);
    } else if (command === 'messages') {
      messagesForCoins(message);
    } else if (command === 'roulette') {
      roulette(message, args);
    } else if (command === 'shop') {
      showShop(message);
    } else if (command === 'buy') {
      buyItem(message, args);
    } else if (command === 'rankings') {
      showRankings(message);
    } else if (command === 'help') {
      showHelp(message);
    }
  });
  
  // Connectez le bot à Discord en utilisant le token
  client.login(config.token);
  