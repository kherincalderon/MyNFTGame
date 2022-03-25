const CONTRACT_ADDRESS = '0x35B9986978b9C93dEef1C5Bbb6d829f7CD3f0566';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  export { CONTRACT_ADDRESS, transformCharacterData };