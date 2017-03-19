const langLocaleMap = {
  'en': 'en-US',
}

class Goolexa {
  googleToAlexa(data) {
    return {
      session: {
        sessionId: data.sessionId,
        application: {
          applicationId: "api.ai"
        }
      },
      request: {
        type: "IntentRequest",
        requestId: data.id,
        locale: this.langToLocale(data.lang),
        timestamp: data.timestamp,
        intent: {
          name: data.result.metadata.intentName,
          slots: this.parametersToSlots(data.result.parameters)
        }
      }
    };
  }

  stripAlexa(data) {
    return {};
  }

  langToLocale(lang) {
    return langLocaleMap[lang] || 'en-US';
  }

  parametersToSlots(parameters) {
    let slots = {};
    for (let key in parameters) {
      slots[key] = { name: key, value: parameters[key] };
    }
    return slots;
  }
}

module.exports = new Goolexa();
